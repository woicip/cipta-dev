import Head from "next/head"
import Navigation from "./Navigation"
import { Context } from './Context/Context';
import { NavigationState, NavReducer } from "./Context/Reducer";
import { useReducer } from "react";

export default function Layout(props: any){

    const [ navState, navDispatch ] = useReducer(NavReducer, NavigationState);
    const value: any = { navState, navDispatch };

    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="favicon.png" />
            </Head>

            <Context.Provider value={value}>
                <section id="LAYOUT">
                    <Navigation />
                    { props.children }
                </section>
            </Context.Provider>
        </>
    )
}