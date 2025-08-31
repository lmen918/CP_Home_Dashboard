export const Database = () => {
    // Port 5000 - Database Admin
    return (
        <div className="bg-black bg-opacity-70 border border-neon-pink rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-pink p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-pink">
                    <i className="fas fa-database mr-2"></i> DB ADMIN (PORT 5000)
                </h3>
                <span className="text-xs px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded">RESTRICTED</span>
            </div>
            <div className="p-4">
                <div className="terminal-text mb-3">
                    <span className="neon-pink">user@cyberhub:~$</span> <span>status db-admin --port 5000</span><br/>
                    <span className="text-green-400">✓ Service active since 1d 8h 15m</span><br/>
                    <span className="text-yellow-400">! Admin access required</span><br/>
                    <span className="text-yellow-400">! Last backup: 6h ago</span>
                </div>
                <div className="flex space-x-3 mt-4">
                    <a href="http://localhost:5000" target="_blank" className="flex-1 bg-neon-pink bg-opacity-20 hover:bg-opacity-40 border border-neon-pink text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-key mr-2"></i> Login
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-pink text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-history mr-2"></i> Backup
                    </button>
                </div>
            </div>
        </div>
    )
}