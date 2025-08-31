import {StatusBar} from "@/app/statusBar/statusBar";
import {Dashboard} from "@/app/dashboard/Dashboard";
import {Terminal} from "@/app/terminal/terminal";

export const MainContent = () => {
    return (
        <main className="container mx-auto px-4 py-6">
            <StatusBar />
            <Dashboard />
            <Terminal />
        </main>
    )
}