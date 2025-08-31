export const MessageBroker = () => {
    // Port 8000 - Message Broker
    return (
        <div className="bg-black bg-opacity-70 border border-neon-pink rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-pink p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-pink">
                    <i className="fas fa-exchange-alt mr-2"></i> MESSAGE BROKER (PORT 8000)
                </h3>
                <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded">RUNNING</span>
            </div>
            <div className="p-4">
                <div className="terminal-text mb-3">
                    <span className="neon-pink">user@cyberhub:~$</span> <span>status broker --port 8000</span><br/>
                    <span className="text-green-400">✓ 12 active queues</span><br/>
                    <span className="text-green-400">✓ 842 msg/min</span><br/>
                    <span className="text-green-400">✓ Avg latency: 8ms</span>
                </div>
                <div className="flex space-x-3 mt-4">
                    <a href="http://localhost:8000" target="_blank" className="flex-1 bg-neon-pink bg-opacity-20 hover:bg-opacity-40 border border-neon-pink text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-eye mr-2"></i> Inspect
                    </a>
                    <button className="flex-1 bg-black bg-opacity-50 hover:bg-opacity-70 border border-neon-pink text-center py-2 px-4 rounded transition duration-300">
                        <i className="fas fa-sliders-h mr-2"></i> Manage
                    </button>
                </div>
            </div>
        </div>
    )
}