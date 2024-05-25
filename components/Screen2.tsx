import React from 'react';
import {cn} from "@/utilities/cn";
import {SkillsInDevelopment, UpcomingCourses} from "@/utilities/types";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {BackgroundBeams} from "@/components/ui/background-beams";


interface Props {
    skills_in_development: SkillsInDevelopment[];
    upcoming_courses: UpcomingCourses[];
}

export const Screen2: React.FC<Props> = ({skills_in_development, upcoming_courses}) => {
    return (
        <div className="animate-shimmer  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] relative border-2 border-color-2 rounded-xl col-span-12 lg:col-span-5 grid grid-cols-5 p-2 gap-2 ">
            <div className="col-span-3 flex  flex-col  h-[400px] relative z-10">
                <TextGenerateEffect icon="icon4" words="Skills in Development"/>

                {
                    upcoming_courses?.map((skill, index) => (
                        <div key={index}
                             className={cn("flex-1 group border border-color-2 p-2 gap-5 rounded-lg hover:flex-[3] transition-all duration-300 overflow-hidden flex  flex-col", index === 0 ? "" : "mt-3")}>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-color-3">{skill.assigned_to}</p>
                                <p className="underline text-color-3 text-xs">{skill.due_date}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-color-3">{skill.title}</p>
                                <p className="text-[10px] border border-color-5 rounded-full p-px text-color-5 px-1 ">{skill.status}</p>
                            </div>
                            <p className="text-sm text-color-3">{skill.description}</p>
                        </div>

                    ))
                }
            </div>
            <div className="relative z-50 col-span-2   overflow-y-auto scrollbar-hide  h-[400px] ">
                <TextGenerateEffect icon="icon3" className="sticky top-0 bg-[#020305]" words="Skills in Development"/>
                <div className="border border-color-2 rounded-lg p-2">
                    {
                        skills_in_development?.map((skill, index) => {
                            return (
                                <div key={index} className=" flex items-center border border-color-2 rounded-lg py-2 pl-2 text-white mt-1 gap-2 overflow-hidden">
                                    <h5 className="size-7 flex items-center justify-center border border-color-5 text-color-5 rounded-md">{skill.employees}</h5>
                                    <p className="text-sm text-color-3">{skill.skill}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
};


