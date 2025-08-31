export const StatusBar = () => {
    return (
        <div className="bg-black bg-opacity-70 border border-neon-blue rounded-lg p-4 mb-6 neon-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-3 bg-black bg-opacity-50 rounded border border-neon-purple">
                    <div className="flex justify-between items-center">
                        <span className="text-sm neon-purple">SERVER STATUS</span>
                        <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">ONLINE</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-800 rounded-full">
                        <div className="h-full bg-neon-purple rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <div className="mt-1 text-xs flex justify-between">
                        <span>LOAD: 87%</span>
                        <span>RAM: 12/16GB</span>
                    </div>
                </div>

                <div className="p-3 bg-black bg-opacity-50 rounded border border-neon-blue">
                    <div className="flex justify-between items-center">
                        <span className="text-sm neon-blue">NETWORK</span>
                        <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">SECURE</span>
                    </div>
                    <div className="mt-2 flex space-x-4">
                        <div>
                            <div className="text-xs">UP</div>
                            <div className="text-lg neon-blue">12.4 <span className="text-xs">MB/s</span></div>
                        </div>
                        <div>
                            <div className="text-xs">DOWN</div>
                            <div className="text-lg neon-blue">8.7 <span className="text-xs">MB/s</span></div>
                        </div>
                    </div>
                </div>

                <div className="p-3 bg-black bg-opacity-50 rounded border border-neon-pink">
                    <div className="flex justify-between items-center">
                        <span className="text-sm neon-pink">SECURITY</span>
                        <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">ACTIVE</span>
                    </div>
                    <div className="mt-2 flex justify-between text-xs">
                        <div>
                            <div>FIREWALL</div>
                            <div className="text-green-400">ON</div>
                        </div>
                        <div>
                            <div>INTRUSIONS</div>
                            <div className="text-red-400">2</div>
                        </div>
                        <div>
                            <div>LAST SCAN</div>
                            <div className="text-yellow-400">5m ago</div>
                        </div>
                    </div>
                </div>

                <div className="p-3 bg-black bg-opacity-50 rounded border border-neon-blue">
                    <div className="flex justify-between items-center">
                        <span className="text-sm neon-blue">SERVICES</span>
                        <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">12/14 RUNNING</span>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                        <div className="text-green-400"><i className="fas fa-circle"></i> API</div>
                        <div className="text-green-400"><i className="fas fa-circle"></i> DB</div>
                        <div className="text-green-400"><i className="fas fa-circle"></i> AUTH</div>
                        <div className="text-green-400"><i className="fas fa-circle"></i> CACHE</div>
                        <div className="text-red-400"><i className="fas fa-circle"></i> MAIL</div>
                        <div className="text-green-400"><i className="fas fa-circle"></i> LOG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}