import { Switch, Route, Router, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Career from "@/pages/career";
import Contacts from "@/pages/contacts";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { loadTekturFont } from "@/lib/font-loader";

function RedirectHandler() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        const redirectPath = sessionStorage.getItem('redirectPath');
        if (redirectPath) {
            sessionStorage.removeItem('redirectPath');
            const repoName = '/tsps-website';
            
            if (redirectPath.startsWith(repoName)) {
                const intendedPath = redirectPath.substring(repoName.length);
                setLocation(intendedPath || '/');
            }
        }
    }, [setLocation]);

    return null;
}

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/career" component={Career}/>
            <Route path="/contacts" component={Contacts}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

function App() {
    useEffect(() => {
        loadTekturFont();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Router base="/tsps-website">
                    <RedirectHandler />
                    <AppRoutes/>
                </Router>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;