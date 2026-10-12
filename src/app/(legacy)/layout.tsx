// ponytail: temporary Once UI shell for /about and /work until they're rebuilt with Tailwind; delete with Once UI.
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import { Column, Flex } from "@once-ui-system/core";
import { Footer, Header, Providers } from "@/components";

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Column fillWidth style={{ minHeight: "100vh" }} horizontal="center">
        <Header />
        <Flex fillWidth padding="l" horizontal="center" flex={1}>
          {children}
        </Flex>
        <Footer />
      </Column>
    </Providers>
  );
}
