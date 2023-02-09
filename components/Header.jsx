import { ConnectButton, CodeArea } from "web3uikit";
import Link from "next/link";

export default function Header() {



    return(
        <div>
            <h1>CRYP70 - Welcome to My World</h1>
            <ConnectButton/>

            <Link href="/">Home</Link>
            <Link href="/simpleswap/liquidity">SimpleSwap</Link>
        </div>
    )
}