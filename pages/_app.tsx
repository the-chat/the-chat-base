import { auth, db } from "../utils/firebase"
import { appWithTranslation } from "next-i18next"
import { useSidebarButtonsDefaultSortFn, Interface } from "@the-chat/ui-kit"
import { INFO, SSO } from "@the-chat/config"
import { useState } from "react"

const App = ({ Component, pageProps }) => (
  <Interface
    configProviderValue={{
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      newUser: false,
      containerMaxWidth: "xs",
      useSidebarButtons: () => useSidebarButtonsDefaultSortFn({}),
      InfoConfig: {
        ...INFO,
        HOST: INFO.DEFAULT_INFO_HOST,
      },
      SSOConfig: {
        ...SSO,
        HOST: SSO.DEFAULT_SSO_HOST,
      },
    }}
    userProviderParams={{
      db,
      path: "users/",
      useDefaultValueForDbDataInProviderWrapper: () => ({
        displayName: "",
        email: "",
        lang: "en",
        phoneNumber: "",
        photoURL: "",
        uid: "",
      }),
    }}
  >
    <Component {...pageProps} />
  </Interface>
)

export default appWithTranslation(App)
