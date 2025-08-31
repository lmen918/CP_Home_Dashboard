export const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-80 border-t border-neon-blue mt-8 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm digital mb-2 md:mb-0">
                        <span className="neon-blue">CYBERHOMEHUB</span> <span className="text-gray-400">v2.3.7</span>
                        <span className="mx-2 text-gray-600">|</span>
                        <span className="neon-purple">NODE:</span> <span className="text-gray-400">PRIMARY</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition"><i className="fab fa-github"></i></a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition"><i className="fab fa-discord"></i></a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition"><i className="fas fa-question-circle"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}