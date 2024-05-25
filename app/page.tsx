import {fetcher} from "@/utilities/server-fetch";
import {
    Screen1,
    Screen2,
    Screen3,
    Screen4
} from "@/components";
import {DashboardData} from "@/utilities/types";

const Home = async ()  =>{
    const data: DashboardData | undefined = await fetcher("/case/dashboard")



    if (!data) {
        return <div>There was an error fetching the data</div>
    }

    const {
        skills_in_development,
        activity_hours,
        average_employee_score,
        in_progress_courses,
        teams,
        top_employees,
        top_skills,
        total_completed_courses,
        total_employees,
        upcoming_courses
    } = data


    return (
        <main className="min-h-screen bg-color-1 p-5">

            <div className="max-w-[1450px]  mx-auto grid grid-cols-12 gap-3">
                <Screen1 top_skills={top_skills} top_employees={top_employees}
                         average_employee_score={average_employee_score} total_employees={total_employees}
                         total_completed_courses={total_completed_courses}/>
                <Screen2 skills_in_development={skills_in_development} upcoming_courses={upcoming_courses}/>
                <Screen3 in_progress_courses={in_progress_courses} activity_hours={activity_hours}/>
                <Screen4 teams={teams}/>
        </div>







        </main>
    );
}

export default Home;