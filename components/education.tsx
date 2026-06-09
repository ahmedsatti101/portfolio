import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import education from "../data/education.js";

export default function Education() {
  const [openEdu, setOpenEdu] = useState({});

  const handleClickEdu = (idx: any) => {
    setOpenEdu((prev: any) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="ml-7 hidden lg:block">
      <p className="font-extrabold text-xl uppercase">Education</p>
      <List sx={{ bgcolor: '#e7c299', borderRadius: 4 }}>
        {education.map((edu, idx) => {
          const isOpen = !!openEdu[idx];

          return (
            <React.Fragment key={idx}>
              <ListItemButton
                onClick={() => handleClickEdu(idx)}
                disableRipple
                sx={{
                  '&:hover': { backgroundColor: 'transparent' }
                }}
              >
                <p className="font-medium bg-[#da9c56] mr-6 p-2 rounded-[10px]">{idx}</p>
                <p className="font-medium text-xl pr-8">{edu.institution}</p>
                <p>{edu.location}</p>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    disableRipple
                    sx={{
                      pl: 4,
                      '&:hover': { backgroundColor: 'transparent' }
                    }}
                  >
                    <ul>
                      {edu.qualifications.map((qual, idx) => (
                        <li key={idx} className="pt-1">
                          {qual} - {edu.results[idx]}
                        </li>
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
