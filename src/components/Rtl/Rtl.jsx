import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function Rtl(props) {
  // eslint-disable-next-line react/prop-types
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export default Rtl;
