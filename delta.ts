
let list: number[] = [1, 2, 3];

function delta(list: number[]): void {

    let delta: number;

    delta = list[1] * list[1] - (4 * list[0] * list[2]);
    console.log(delta);

    if (delta > 0) {

        if (list[1] >= 0) {

            let x1: number;
            let x2: number;

            x1 = (-list[1] - Math.sqrt(delta)) / (2 * list[0]);
            x2 = (list[2] / list[0]) / x1;

            console.log(x1);
            console.log(x2);

        }

    }
    else if (delta == 0) {

        let x1: number;

        x1 = ((-list[1]) / (2 * list[0]));

        console.log(x1);

    }
    else (delta < 0); {

        console.log("delta ujemna")

    }

}

delta(list);