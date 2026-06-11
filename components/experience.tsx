import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import experience from "../data/experience.js";

export default function Experience({ hidden }: { hidden: boolean }) {
  const [openExp, setOpenExp] = useState({});

  const handleClickExp = (idx: any) => {
    setOpenExp((prev: any) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className={`${hidden ? 'mr-7 hidden lg:block' : ''}`}>
      <p className="font-extrabold text-xl lg:text-2xl uppercase">Experience</p>

      <List sx={{ bgcolor: '#e0ab72', borderRadius: 4 }}>
        {experience.map((exp, idx) => {
          const isOpen = !!openExp[idx];

          return (
            <React.Fragment key={idx}>
              <ListItemButton
                onClick={() => handleClickExp(idx)}
                disableRipple
                sx={{
                  '&:hover': { backgroundColor: 'transparent' }
                }}
              >
                <p className="font-medium bg-[#da913f] mr-6 p-2 rounded-[10px]">{idx}</p>
                <p className="font-medium text-lg lg:text-xl">{exp.title}</p>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div">
                  <p className="font-semibold pl-4 text-lg lg:text-xl">Company: {exp.company}</p>

                  <ListItemButton
                    disableRipple
                    sx={{
                      pl: 4,
                      '&:hover': { backgroundColor: 'transparent' }
                    }}
                  >
                    <p className="lg:text-xl">{exp.description}</p>
                  </ListItemButton>

                  <p className="pl-4 pt-2 font-semibold text-lg lg:text-xl">Achievements</p>
                  <ListItemButton
                    disableRipple
                    sx={{
                      pl: 4,
                      '&:hover': { backgroundColor: 'transparent' }
                    }}>
                    <ul>
                      {exp.achieved.map((item, idx) => (
                        <li key={idx} className="pb-2 lg:text-xl">{item}</li>
                      ))}
                    </ul>
                  </ListItemButton>
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  )
}
