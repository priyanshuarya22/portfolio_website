import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Scanlines from './components/Scanlines';
import HomeScreen from './screens/HomeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import type { Screen } from './lib/utils';

export default function App() {
    const [screen, setScreen] = useState<Screen>('HOME');

    return (
        <div className="min-h-screen flex flex-col selection:bg-primary-green selection:text-black">
            <Scanlines />
            <Header currentScreen={screen} setScreen={setScreen} />

            <main className="flex-1">
                {screen === 'HOME' && <HomeScreen setScreen={setScreen} />}
                {screen === 'EXP' && <ExperienceScreen />}
                {screen === 'SKILLS' && <SkillsScreen />}
                {screen === 'PROJ' && <ProjectsScreen />}
            </main>

            <Footer />
        </div>
    );
}
