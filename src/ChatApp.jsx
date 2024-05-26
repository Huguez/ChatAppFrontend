import { MainRouter } from "./router/MainRouter";
import { AuthProvider } from "@/context"

function ChatApp() {
	return <>
		<AuthProvider>
			<MainRouter />
		</AuthProvider>
	</>
}

export default ChatApp;
