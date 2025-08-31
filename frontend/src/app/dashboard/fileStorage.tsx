export const FileStorage = () => {
    // Port 7000 - File Storage
    return (
        <div className="bg-black bg-opacity-70 border border-neon-purple rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-purple p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-purple">
                    <i className="fas fa-folder-open mr-2"></i> FILE STORAGE (PORT 7000)
                </h3>
                <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">RUNNING</span>
            </div>
            <div className="p-4">
                <div className="terminal-text mb-3">
                    <span className="neon-purple">user@cyberhub:~$</span> <span>status storage --port 7000</span><br/>
                    <span className="text-green-400">✓ 1.2TB/2TB available</span><br/>
                    <span className="text-green-400">✓ 42 active connections</span><br/>
                    <span className="text-yellow-400">! Backup scheduled in 2h</span>
                </div>
                <div className="flex space-x-3 mt-4">
                    <a href="http://localhost:7000" target="_blank" className="flex-1 bg-neon-purple bg-opacity-20 hover:bg-opacity-40 border border-neon-purple text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-file-upload mr-2"></i> Upload
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-purple text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-shield-alt mr-2"></i> Secure
                    </button>
                </div>
            </div>
        </div>
    )
}