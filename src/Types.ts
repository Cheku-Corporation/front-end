export type User = {
    idUser: number;
    name: string;
    email: string;
    token: string;
    groupId: number;
    groupName: string;
}
export type AppContextType = {
    user: User;
    setUser: (user: User) => void;
    logout: () => void;
    navigate: (path: string) => void;
    checkUser: () => boolean;

    currentCar : string;
    setCurrentCar: (car: string) => void;
    carList : SimplifiedCar[];
    setCarList : (carList : SimplifiedCar[]) => void;

}


export type DashboardProps = {
    averageSpeed: number;
    totalDistance: number;
    totalTime: number;
    fuelSpent: number;
    fuelConsumptionPer100km: number;
    previousHasData: boolean;
    averageSpeedComparedToPrevious: number | null;
    totalDistanceComparedToPrevious: number | null;
    totalTimeComparedToPrevious: number | null;
    fuelSpentComparedToPrevious: number | null;
    fuelConsumptionPer100kmComparedToPrevious: number | null;
    coordinates: [
        {
            tripNumber: number;
            start: {
                latitude: number;
                longitude: number;
            },
            end: {
                latitude: number;
                longitude: number;
            }
        }
    ]
}


export type StatisticsProps = {
    averageSpeed: number;
    totalDistance: number;
    totalTime: number;
    fuelSpent: number;
    fuelConsumptionPer100km: number;
    previousHasData: boolean;
    averageSpeedComparedToPrevious: number | null;
    totalDistanceComparedToPrevious: number | null;
    totalTimeComparedToPrevious: number | null;
    fuelSpentComparedToPrevious: number | null;
    fuelConsumptionPer100kmComparedToPrevious: number | null;
}

export enum CarFuelType {
    GASOLINE = "Gasoline",
    DIESEL = "Diesel",
    ELECTRIC = "Electric",
}
export type Car = {
    id: number,
    matricula: string,
    inspectionDate: string,
    insuranceDate: string,
    group: {
        id: number,
        groupName: string,
        isAdmin: number,
        groupNameEncripted: string| null,

    },
    carModel: {
        brand: string,
        model: string,
        year: number
        tankCapacity: number,
        type: CarFuelType,
        motor: {
            id: number,
            power: number,
            displacement: number,
            model: string,
        },
        tires: {
            id: number,
            brand: string,
            model: string
        }
    },
}

export type LighState = "ON" | "OFF"
export type LiveProps = {
    timeOnTravel: number,
    currentSpeed: number,
    averageSpeed: number,
    currentRPM: number,
    currentGear: number,
    relativeDistance: number,
    totalDistance: number,
    lightsState: LighState,
    tiresPressure: number,
    tiresTemperature: number,
    currentWaterPercentage: number,
    currentOilPercentage: number,
    currentFuelPercentage: number,
    lightdsState: LighState
}

export type LiveStatisticsProps = {
    currentSpeed: number,
    averageSpeed: number,
    currentRPM: number,
    currentGear: number,
    relativeDistance: number,
    totalDistance: number,
    tiresPressure: number,
    tiresTemperature: number,
}

export type SimplifiedCar = {
    id: number,
    brand: string,
    model: string,
}