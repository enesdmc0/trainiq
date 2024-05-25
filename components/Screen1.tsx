"use client"
import React from 'react';
import {cn} from "@/utilities/cn";
import {AverageEmployeeScore, TopEmployees, TopSkills, TotalCompletedCourses, TotalEmployees} from "@/utilities/types";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Meteors} from "@/components/ui/meteors";
interface Props {
    total_employees: TotalEmployees;
    total_completed_courses: TotalCompletedCourses;
    average_employee_score: AverageEmployeeScore;
    top_skills: TopSkills[];
    top_employees: TopEmployees[];


}


export const Screen1: React.FC<Props> = ({
                                      total_completed_courses,
                                      total_employees,
                                      average_employee_score,
                                      top_skills,
                                      top_employees
                                  }) => {

    const data = {
                "Total Employees": total_employees,
                "Total Completed Courses": total_completed_courses,
                "Average Employee Score": average_employee_score,

            }


        return(
            <div className="border-2 border-color-2  rounded-xl col-span-12 lg:col-span-7  p-2 ">
                <HeroHighlight className="grid grid-cols-5 h-full gap-2">
                    <div className="col-span-4 grid grid-cols-5 gap-2">

                        <div className=" col-span-2 grid grid-cols-2 gap-3">
                            {
                                top_skills?.map((skill, index) => (
                                    <div key={index}
                                         className={cn(" rounded-lg ", index === 0 ? "col-span-2" : "col-span-2 lg:col-span-1 border border-color-2")}>
                                        {index === 0
                                            ?
                                            <div className="flex flex-col  h-full">
                                                <TextGenerateEffect icon="icon2" words="Top Skills"/>
                                                <div
                                                    className="border border-color-2 rounded-lg h-full flex items-center justify-center flex-col">
                                                    <p className=" lg:text-xl font-bold text-color-3">{skill.employees}</p>
                                                    <p className="text-sm lg:text-xl font-bold text-color-3  text-center">{skill.skill}</p>
                                                </div>
                                            </div>
                                            :
                                            (<div
                                                className="border border-color-2 rounded-lg h-full flex items-center justify-center flex-col">
                                                <p className="lg:text-xl font-bold text-color-3">{skill.employees}</p>
                                                <p className="text-sm font-bold text-color-3  text-center">{skill.skill}</p>
                                            </div>)}
                                    </div>
                                ))}
                        </div>

                        <div className=" border border-color-2 rounded-lg col-span-3 p-2 ">
                            <TextGenerateEffect icon="icon1" words="Top Employees"/>
                            <div className="flex flex-col flex-1 gap-3 ">
                                {
                                    top_employees?.map((skill, index) => (
                                        <div key={index}
                                             className="border border-color-2 rounded-lg flex-col flex flex-1 p-2">
                                            <div className="flex items-center justify-between">
                                                <span className="underline text-color-4">{skill.name}</span>
                                                <span
                                                    className="size-7 border rounded-md flex items-center justify-center border-color-5 text-sm text-color-5">{skill.current_score}</span>
                                            </div>
                                            <span className="text-color-3 overflow-hidden text-sm">{skill.email}</span>
                                            <span className="text-color-3 text-sm">{skill.title}</span>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </div>
                    <div className="col-span-1  flex gap-3 flex-col">
                        {
                            Object.entries(data).map(([key, value]: any, index: number) => (
                                <div key={index} className="border border-color-2 flex items-center justify-center flex-col text-center flex-1 rounded-lg">
                                    <p className="text-color-3 font-bold lg:text-2xl">{value}</p>
                                    <p className="text-color-3 text-xs lg:text-xl font-medium">{key}</p>

                                </div>
                            ))
                        }

                    </div>
                </HeroHighlight>
            </div>

        );
};


