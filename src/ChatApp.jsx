import { MainRouter } from "./router/MainRouter";
import { AuthProvider, SocketProvider } from "@/context"

function ChatApp() {
	return <>
		<AuthProvider>
			<SocketProvider>
				<MainRouter />
			</SocketProvider>
		</AuthProvider>
	</>
}

export default ChatApp;
