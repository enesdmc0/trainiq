import React from 'react';
import {cn} from "@/utilities/cn";
import {ActivityHours, InProgressCourses} from "@/utilities/types";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

interface Props {
    in_progress_courses: InProgressCourses[];
    activity_hours: ActivityHours[];

}

export const Screen3: React.FC<Props> = ({in_progress_courses, activity_hours}) => {
    return (
        <div className=" border-2 col-span-12 lg:col-span-5 rounded-xl border-color-2 grid grid-cols-2 p-2 gap-3 h-[550px]">
            <div className="col-span-1 overflow-y-auto">
                <TextGenerateEffect icon="icon5" words="Activity Hours"/>
                <div className="grid rounded-lg border-color-2 grid-cols-5 text-xs text-color-3  border p-2">
                    <span className="col-span-2 underline text-color-5">date</span>
                    <span className="underline text-color-5">hour</span>
                    <span className="underline text-color-5">taken</span>
                    <span className="underline text-color-5">completed</span>
                </div>
                {activity_hours?.map((skill, index) => {
                    return (
                        <div key={index}
                             className="grid text-xs grid-cols-5 border border-color-2 rounded-lg text-color-3 p-2 mt-1">
                            <p className="col-span-2">{skill.date}</p>
                            <p>{skill.hours}</p>
                            <p>{skill.lessons_taken}</p>
                            <p>{skill.exams_completed}</p>
                        </div>
                    )
                })
                }
            </div>

            <div className="flex flex-col relative  overflow-y-auto">
                <TextGenerateEffect icon="icon3" className="sticky top-0 bg-color-1" words="In Progress Courses"/>
                {
                    in_progress_courses?.map((skill, index) => (
                        <div key={index}
                             className={cn("flex-1 border border-color-2 rounded-md flex  flex-col p-2 gap-3", index === 0 ? "" : "mt-3")}>
                            <div className="flex items-center justify-between">
                                <p className="underline text-sm text-color-3">{skill.title}</p>
                                <p className="text-xs text-color-3">{skill.due_date}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-color-3 text-sm">{skill.assigned_to}</p>
                                <p className="border border-color-5 rounded-full text-[10px] p-px px-1 text-color-5">{skill.status}</p>
                            </div>
                            <p className="text-sm text-color-3">{skill.description}</p>


                        </div>
                    ))
                }
            </div>
        </div>
    );
};

