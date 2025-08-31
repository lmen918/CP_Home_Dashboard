import {WebApp} from "@/app/dashboard/webApp";
import {ApiService} from "@/app/dashboard/apiService";
import {Database} from "@/app/dashboard/database";
import {Monitoring} from "@/app/dashboard/monitoring";
import {FileStorage} from "@/app/dashboard/fileStorage";
import {MessageBroker} from "@/app/dashboard/messageBroker";

export const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WebApp />
            <ApiService />
            <Database />
            <Monitoring />
            <FileStorage />
            <MessageBroker />
        </div>

    )
}