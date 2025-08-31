export const Monitoring = () => {
    // Port 6000 - Monitoring
    return (
        <div className="bg-black bg-opacity-70 border border-neon-blue rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-blue p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-blue">
                    <i className="fas fa-chart-bar mr-2"></i> MONITORING (PORT 6000)
                </h3>
                <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">RUNNING</span>
            </div>
            <div className="p-4">
                <div className="h-32 mb-3 bg-black bg-opacity-80 border border-neon-blue rounded p-2">
                    <div className="terminal-text text-xs">
                        <div className="flex justify-between">
                            <span>CPU:  ▁▃▅▇▇▆▅▄▃▁▂▄▅▇</span>
                            <span className="neon-blue">72%</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>RAM: ▁▂▄▅▆▇▇▆▅▄▂▁▂</span>
                            <span className="neon-blue">64%</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>NET:  ▁▂▃▄▅▆▇▇▆▅▄▂▁</span>
                            <span className="neon-blue">1.2MB/s</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>DSK: ▁▂▄▅▆▇▇▆▅▄▂▁▂</span>
                            <span className="neon-blue">58%</span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 mt-2">
                    <a href="http://localhost:6000" target="_blank" className="flex-1 bg-neon-blue bg-opacity-20 hover:bg-opacity-40 border border-neon-blue text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-blue text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-bell mr-2"></i> Alerts
                    </button>
                </div>
            </div>
        </div>
    )
}
