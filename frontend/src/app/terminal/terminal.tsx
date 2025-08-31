export const Terminal = () => {
    return (
        <div className="mt-8 bg-black bg-opacity-90 border border-neon-blue rounded-lg overflow-hidden neon-border">
            <div className="border-b border-neon-blue p-3 flex justify-between items-center bg-black bg-opacity-50">
                <h3 className="font-bold neon-blue">
                    <i className="fas fa-terminal mr-2"></i> SYSTEM TERMINAL
                </h3>
                <div className="flex space-x-2">
                    <button className="text-xs px-2 py-1 bg-neon-blue bg-opacity-20 hover:bg-opacity-40 border border-neon-blue rounded transition duration-300">
                        <i className="fas fa-redo"></i>
                    </button>
                    <button className="text-xs px-2 py-1 bg-neon-blue bg-opacity-20 hover:bg-opacity-40 border border-neon-blue rounded transition duration-300">
                        <i className="fas fa-expand"></i>
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div id="terminal-output" className="terminal-text h-64 overflow-y-auto font-mono text-sm mb-3">
                    <div>cyberhub@node-primary:~$ system status --all</div>
                    <div>Loading system status...</div>
                    <div>----------------------------------------</div>
                    <div>SYSTEM: CyberHub Control v2.3.7</div>
                    <div>NODE: primary (192.168.1.100)</div>
                    <div>UPTIME: 2 days, 7 hours, 42 minutes</div>
                    <div>CPU: Intel Xeon 8-core @ 3.2GHz (72% load)</div>
                    <div>MEMORY: 12.4/16.0 GB (77%)</div>
                    <div>DISK: 1.2/2.0 TB (60%)</div>
                    <div>NETWORK: eth0 @ 1Gbps (UP: 12.4MB/s, DOWN: 8.7MB/s)</div>
                    <div>----------------------------------------</div>
                    <div>SERVICES:</div>
                    <div>  ✓ web-app:3000 (42 connections)</div>
                    <div>  ✓ api:4000 (128 req/min)</div>
                    <div>  ✓ db-admin:5000 (restricted)</div>
                    <div>  ✓ monitoring:6000 (active)</div>
                    <div>  ✓ storage:7000 (1.2TB free)</div>
                    <div>  ✓ broker:8000 (842 msg/min)</div>
                    <div>  ✓ mail:9000 (warning: queue building)</div>
                    <div>  ✓ auth:10000 (24 active sessions)</div>
                    <div>----------------------------------------</div>
                    <div>cyberhub@node-primary:~$ <span className="blink">_</span></div>
                </div>
                <div className="flex">
                    <input type="text" className="flex-1 bg-black bg-opacity-50 border border-neon-blue text-green-400 px-3 py-2 rounded-l focus:outline-none focus:border-neon-pink" placeholder="Enter command..."></input>
                    <button className="bg-neon-blue bg-opacity-50 hover:bg-opacity-70 text-black px-4 py-2 rounded-r transition duration-300">
                    <i className="fas fa-paper-plane"></i>
                </button>
                </div>
            </div>
        </div>
    )
}