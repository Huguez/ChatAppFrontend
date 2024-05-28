import { MainRouter } from "@/router";
import { ChatProvider, AuthProvider, SocketProvider } from "@/context"

import moment from "moment"
import "moment/locale/es"

moment.locale("es")


function ChatApp() {
	return <>
		<ChatProvider>
			<AuthProvider>
				<SocketProvider>
					<MainRouter />
				</SocketProvider>
			</AuthProvider>
		</ChatProvider>
	</>
}

export default ChatApp;
