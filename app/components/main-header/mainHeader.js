import Link from "next/link"
import logoImg from "@/assets/logo.png"
import classes from "./mainHeader.module.css"
import Image from "next/image"
import NavLink from "./nav-link"

export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="a plate with food on it" priority/>
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                    <NavLink href="/community">Community</NavLink>
                    </li>
                    <li>
                    <NavLink href="/meals">Meals</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}