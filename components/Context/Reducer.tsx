interface States {
    home: boolean,
    wip: boolean,
    about: boolean
}

type Actions = "home" | "wip" | "about";

interface ReducerType {
    type: Actions
}

export const NavigationState: States = {
    home: true,
    wip: false,
    about: false,
}

export function NavReducer(state: States, action: ReducerType) {
    const { type } = action;

    switch(type){
        case 'home':
            return { home: true, wip: false, about: false };

        case 'wip':
            return { home: false, wip: true, about: false };

        case 'about': 
            return { home: false, wip: false, about: true }
    }
}