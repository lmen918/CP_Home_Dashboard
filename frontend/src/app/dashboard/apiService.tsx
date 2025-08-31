export const ApiService = () => {
    // Port 4000 - API Service
    return (
        <div className="bg-black bg-opacity-70 border border-neon-purple rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-purple p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-purple">
                    <i className="fas fa-server mr-2"></i> API SERVICE (PORT 4000)
                </h3>
                <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">RUNNING</span>
            </div>
            <div className="p-4">
                <div className="terminal-text mb-3">
                    <span className="neon-purple">user@cyberhub:~$</span> <span>status api --port 4000</span><br/>
                    <span className="text-green-400">✓ Service active since 7d 2h 33m</span><br/>
                    <span className="text-green-400">✓ 128 requests/min</span><br/>
                    <span className="text-green-400">✓ Avg response: 42ms</span>
                </div>
                <div className="flex space-x-3 mt-4">
                    <a href="http://localhost:4000/docs" target="_blank" className="flex-1 bg-neon-purple bg-opacity-20 hover:bg-opacity-40 border border-neon-purple text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-book mr-2"></i> Docs
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-purple text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-chart-line mr-2"></i> Monitor
                    </button>
                </div>
            </div>
        </div>
    )
}