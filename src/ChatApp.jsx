import { MainRouter } from "@/router";
import { ChatProvider, AuthProvider, SocketProvider } from "@/context"

import moment from "moment"
import "moment/locale/es"

moment.locale("es")


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
