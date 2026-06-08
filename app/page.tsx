"use client";

import projects from "../data/projects.js";
import experience from "../data/experience.js";
import education from "../data/education.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import React, { useState } from "react";

export default function Home() {
  const [openExp, setOpenExp] = useState({});
  const [openEdu, setOpenEdu] = useState({});

  const handleClickExp = (idx: any) => {
    setOpenExp((prev: any) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleClickEdu = (idx: any) => {
    setOpenEdu((prev: any) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="ml-5 mr-5">
      <p className="lg:hidden uppercase font-extrabold text-2xl">Ahmed Mohamed</p>
      <p className="lg:hidden uppercase font-extrabold text-[15px]">Software Engineer</p>

      <div className="mt-4 mb-4">
        <p className="font-medium lg:text-xl lg:w-full lg:max-w-200">Lorem ipsum nostrud ad et. Exercitation nulla esse duis id. Quis fugiat sed. In ut consectetur sit. Consequat ullamco aliquip do deserunt deserunt commodo pariatur. Veniam ad tempor enim consectetur.</p>
      </div>

      <div className="lg:grid lg:grid-cols-3">
        <div className="mr-7 hidden lg:block">
          <p className="font-extrabold text-xl uppercase">Experience</p>

          <List sx={{ bgcolor: '#e7c299', borderRadius: 4 }}>
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
                    <p className="font-medium bg-[#da9c56] mr-6 p-2 rounded-[10px]">{idx}</p>
                    <p className="font-medium text-xl">{exp.title}</p>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div">
                      <p className="font-semibold pl-4 text-lg">Company: {exp.company}</p>

                      <ListItemButton
                        disableRipple
                        sx={{
                          pl: 4,
                          '&:hover': { backgroundColor: 'transparent' }
                        }}
                      >
                        <p>{exp.description}</p>
                      </ListItemButton>

                      <p className="pl-4 pt-2 font-semibold text-lg">Achievements</p>
                      <ListItemButton
                        disableRipple
                        sx={{
                          pl: 4,
                          '&:hover': { backgroundColor: 'transparent' }
                        }}>
                        <ul>
                          {exp.achieved.map((item, idx) => (
                            <li key={idx} className="pb-2">{item}</li>
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

        <div>
          <p className="font-extrabold text-xl uppercase">Projects</p>

          {projects.map((project, idx) => (
            <div className="relative" key={idx}>
              <p className="font-extrabold text-lg">{project.name} <ArrowForwardIcon sx={{ position: 'absolute', right: 0 }} /></p>
              <p className="font-medium">{project.intro}</p>

              <div className="grid grid-cols-3 gap-1 mb-5">
                {project.stack.map((tech, idx) => (
                  <p
                    key={idx}
                    className="text-sm p-0.5 uppercase font-extrabold border-[1.5px] bg-[#ebdccb] lg:hover:bg-black lg:hover:text-[#ebdccb]"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

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
      </div>

      <div className="hidden lg:block">
        <p className="mt-5 uppercase font-extrabold text-2xl">About me</p>
        <p className="font-medium lg:text-xl lg:w-full lg:max-w-300">Lorem ipsum nulla dolor quis. Ullamco nostrud incididunt elit sed consequat est sint cupidatat. Deserunt pariatur ut officia sunt. Et magna excepteur id dolore cillum do in aute. Laboris qui reprehenderit aliquip.</p>
      </div>
    </div>
  )
}
