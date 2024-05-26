import { MainRouter } from "@/router";
import { ChatProvider, AuthProvider, SocketProvider } from "@/context"

function ChatApp() {
	return <>
		<AuthProvider>
			<ChatProvider>
				<SocketProvider>
					<MainRouter />
				</SocketProvider>
			</ChatProvider>
		</AuthProvider>
	</>
}

export default ChatApp;
