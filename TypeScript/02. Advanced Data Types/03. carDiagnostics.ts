type CarBodyType = { material: string, state: string }
type TiresType = { airPressure: number, condition: string, }
type EngineType = { horsepower: number, oilDensity: number, }
type RunDiagnosticsType = { partName: string, runDiagnostics(): string }


function carDiagnostics(
    carBody: CarBodyType & RunDiagnosticsType,
    tires: TiresType & RunDiagnosticsType,
    engine: EngineType & RunDiagnosticsType
) {

    console.log(carBody.runDiagnostics());

}

carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName } },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName } },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName } }
)