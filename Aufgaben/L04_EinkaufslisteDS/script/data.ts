

namespace shoppinglistA04 {

    
    export interface Input {
        savedItem: string;
        savedAmount: number;
        savedComment: string;
        savedDate: string;
        savedPurchase: boolean;
    }



    export let savedInputs: Input[] = [

        {
            savedItem: "Nutella Biscuits",
            savedAmount: 4,
            savedComment: "grosse liebe",
            savedDate: "03.11.2022",
            savedPurchase: false
          
        },
    
    ];

    export let savedItem: string = "";

}