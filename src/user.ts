class User {
	let id: number;
    let lastName: string;
    let firstName: string;
    let age: number;
    function displayInfos(): string {
        let informations: string = id + lastName + firstName + age;
        return informations;
    }
}