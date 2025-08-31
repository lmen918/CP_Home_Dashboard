export const WebApp = () => {
    // Port 3000 - Web App
    return (
        <div className="bg-black bg-opacity-70 border border-neon-blue rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-blue p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-blue">
                    <i className="fas fa-globe mr-2"></i> WEB APP (PORT 3000)
                </h3>
                <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">RUNNING</span>
            </div>
            <div className="p-4">
                <div className="terminal-text mb-3">
                    <span className="neon-blue">user@cyberhub:~$</span> <span>status web-app --port 3000</span><br/>
                    <span className="text-green-400">✓ Service active since 2d 4h 12m</span><br/>
                    <span className="text-green-400">✓ 42 active connections</span><br/>
                    <span className="text-yellow-400">! New version available (v2.4.1)</span>
                </div>
                <div className="flex space-x-3 mt-4">
                    <a href="http://localhost:3000" target="_blank" className="flex-1 bg-neon-blue bg-opacity-20 hover:bg-opacity-40 border border-neon-blue text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-external-link-alt mr-2"></i> Open
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-blue text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-cog mr-2"></i> Configure
                    </button>
                </div>
            </div>
        </div>
    )
}