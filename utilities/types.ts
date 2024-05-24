export type ActivityHours = {
    "date": string,
    "exams_completed": number,
    "hours": number,
    "lessons_taken": number,
}

export type AverageEmployeeScore = {
    "average_employee_score": number
}

export type InProgressCourses = {
    "assigned_to": string,
    description: string,
    "due_date": string,
    "status": string,
    "title": string,
}

export type SkillsInDevelopment = {
    "employees": number,
    "skill": string,
}

export type Teams = {
    description: string,
    overall_score: number,
    title: string,
    total_employee_count: number,
    employees: {
        current_score: number,
        email: string,
        lessons_taken: number,
        name: string,
        skills_being_developed: string[]
    }[]
}

export type TopEmployees = {
    "current_score": number,
    "email": string,
    "name": string,
    "title": string,
}

export type TopSkills = {
    "employees": number,
    "skill": string,
}

export type TotalCompletedCourses = {
    "completed_courses": number
}

export type TotalEmployees = {
    "total_employees": number
}

export type UpcomingCourses = {
    "assigned_to": string,
    "due_date": string,
    "title": string,
    "description": string,
    "status": string,
}

export interface DashboardData {
    skills_in_development: SkillsInDevelopment[];
    activity_hours: ActivityHours[];
    average_employee_score: AverageEmployeeScore;
    in_progress_courses: InProgressCourses[];
    teams: Teams[];
    top_employees: TopEmployees[];
    top_skills: TopSkills[];
    total_completed_courses: TotalCompletedCourses;
    total_employees: TotalEmployees;
    upcoming_courses: UpcomingCourses[];
}