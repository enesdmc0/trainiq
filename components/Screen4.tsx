"use client"
import React from 'react';
import {cn} from "@/utilities/cn";
import {Teams} from "@/utilities/types";
import {BackgroundBeams} from "@/components/ui/background-beams";

interface Props {
    teams: Teams[]
}

export const Screen4: React.FC<Props> = ({teams}) => {
    const teamsTitles = teams?.map((team) => team.title) || [];
    const [activeTeam, setActiveTeam] = React.useState(teams?.length > 2 ? 2 : 0);


    const activeTeamData = teams && teams[activeTeam] || {
        description: '',
        overall_score: 0,
        title: '',
        total_employee_count: 0,
        employees: []
    };
    const {description, overall_score, title, total_employee_count, employees} =  activeTeamData

    return (
        <div
            className="  animate-shimmer  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] relative col-span-12 lg:col-span-7 border-2 border-color-2 rounded-xl flex flex-col-reverse md:flex-row  h-[550px] p-2 gap-3">
            <div
                className="relative z-50 flex-1 border border-color-2 rounded-lg p-2 overflow-y-auto scrollbar-hide  gap-3 flex">
                <div className=" flex-1 text-color-4 space-y-5 overflow-y-auto scrollbar-hide border border-color-2 p-2 rounded-lg">
                    <p className="text-color-5 underline font-semibold text-center">{title}</p>
                    <span className="text-color-3 text-sm flex items-center gap-2">
                        <p className="underline">Overall Score:</p>
                        <p>{overall_score}</p>
                   </span>
                    <span className="text-color-3 text-sm flex items-center gap-2">
                        <p className="underline">Total Employee Count:</p>
                        <p>{total_employee_count}</p>
                  </span>
                    <p className="text-sm text-color-3">{description}</p>
                </div>
                <div className="flex-1  space-y-3 overflow-y-auto scrollbar-hide">
                    <button
                        className={cn("border border-color-5 p-1 text-color-3 font-medium flex items-center justify-center rounded-md w-full",)}>
                        + Create New People
                    </button>
                    {employees.map((employee, index) => (
                        <div key={index} className="border border-color-2 rounded-lg p-2 space-y-3">
                            <div key={index} className="flex flex-col gap-3">
                                <span className="text-center text-sm underline text-color-5">{employee.name}</span>
                                <span className="flex items-center gap-2">
                                    <p className="text-sm text-color-3 underline">Current Score</p>
                                    <p className="text-sm text-color-3">{employee.current_score}</p>
                                </span>
                                <span className="flex items-center gap-2">
                                    <p className="text-sm text-color-3 underline">Lessons Taken</p>
                                    <p className="text-sm text-color-3">{employee.lessons_taken}</p>
                                </span>

                                <p className="text-color-3 text-sm">{employee.email}</p>
                            </div>
                            <div className="flex flex-wrap gap-1 ">
                                {employee.skills_being_developed.map((skill, index) => (
                                    <div
                                        className="rounded-full whitespace-nowrap border border-color-3 text-[10px] py-px px-2 flex items-center justify-center gap-1 "
                                        key={index}>
                                        <span className="size-2 rounded-full bg-color-5 "/>
                                        <p className="text-color-3 ">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative z-50 gap-3 flex md:flex-col m-auto scrollbar-hide overflow-y-auto">

                {teamsTitles.map((team, index) => {
                    return (
                        <button key={index} onClick={() => setActiveTeam(index)}
                                className={cn("border p-1 md:p-2 text-xs text-color-3 font-medium flex items-center justify-center rounded-md w-full", activeTeam === index ? "border-color-5 " : "border-color-2")}>{team}</button>
                    )
                })}
                <button
                    className={cn("border border-color-2 p-1   text-color-3 font-medium flex items-center justify-center rounded-md w-full",)}>+
                </button>

            </div>
            <BackgroundBeams/>
        </div>
    );
};

