function Encrypt(){

    SET2 = [];
    for (let i = 0; i < SET1.length; i++){
        let value = "true";
        while (value != "false"){
            let RandomIndex = Math.floor(Math.random() * (SET1.length));
            if (SET2.includes(SET1[RandomIndex]) == false){
                SET2.push(SET1[RandomIndex]);
                value = "false";
            }
        }
    }

    Plaintext_Input = document.getElementById("Plaintext_Input").value;
    Ciphertext_Output = "";
    for (let i = 0; i < Plaintext_Input.length; i++){
        Ciphertext_Output += SET2[i];
    }

    let Compteur = 0;
    let C_Index = [];
    for (let i = 0; i < Ciphertext_Output.length; i++){
        if (SET1.includes(Ciphertext_Output[i]) == true){
            for (let j = 0; j < SET1.length; j++){
                if (SET1[j] === Ciphertext_Output[i]){
                    C_Index.push(Compteur);
                    Compteur = 0
                    break;
                } else {
                    Compteur += 1;
                }
            }
        }
    }
        
    let P_Index = [];
    for (let i = 0; i < Plaintext_Input.length; i++){
        if (SET1.includes(Plaintext_Input[i]) == true){
            for (let j = 0; j < SET1.length; j++){
                if (SET1[j] === Plaintext_Input[i]){
                    P_Index.push(Compteur);
                    Compteur = 0;
                    break;
                } else {
                    Compteur += 1;
                }
            }
        }
    }

    ShiftValues = [];
    let IndexDifference = 0;
    for (let i = 0; i < Ciphertext_Output.length; i++){
        IndexDifference = C_Index[i] - P_Index[i];
        ShiftValues.push(IndexDifference).toString();
    }

    SecretKey_Output = "";
    for (let i = 0; i < ShiftValues.length; i++){
        if (i == ShiftValues.length - 1){
            SecretKey_Output += `${ShiftValues[i]}`;
        } else {
            SecretKey_Output += `${ShiftValues[i]}_`;
        }
    }

    document.getElementById("Ciphertext_Output").innerText = `Encrypted message:\n${Ciphertext_Output}`;
    document.getElementById("SecretKey_Output").innerText = `Secret Key:\n${SecretKey_Output}`;

}

function Decrypt(){
    let Ciphertext_Input = document.getElementById("Ciphertext_Input").value;
    let SecretKey_Input = document.getElementById("SecretKey_Input").value;
    SecretKey_Input = SecretKey_Input.split("_");

    let Compteur = 0
    let C_Index_SET1 = [];
    for (let i = 0; i < Ciphertext_Input.length; i++){
        if (SET1.includes(Ciphertext_Input[i]) == true){
            for (let j = 0; j < SET1.length; j++){
                if (SET1[j] === Ciphertext_Input[i]){
                    C_Index_SET1.push(Compteur);
                    Compteur = 0;
                    break;
                } else {
                    Compteur += 1;
                }
            }
        }
    }

    let Plaintext_Output = "";
    let DecryptedLetterIndex = 0;
    for (let i = 0; i < C_Index_SET1.length; i++){
        DecryptedLetterIndex = C_Index_SET1[i] - SecretKey_Input[i];
        Plaintext_Output += SET1[DecryptedLetterIndex];
    }

    document.getElementById("Plaintext_Output").innerText = `Decrypted message:\n ${Plaintext_Output}`;
}

///////////////////////////////////////////////////////////////////////////////////////

const SET1 = [" ", "?", "(", ")", ":", ";", "#", "{", "}", "[", "]", "&", "@", "%", ".", ",", "!", "$", "-", "'", "_", "+", "=", "/", "*", '"', "<", ">", "ô", "ê", "ù", "é", "è", "ç", "à", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Ô", "Ê", "Ù", "É", "È", "Ç", "À", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let SET2 = [];

let ShiftValues = [];
let SecretKey_Output = "";

let Plaintext_Input = "";
let Ciphertext_Output = "";
