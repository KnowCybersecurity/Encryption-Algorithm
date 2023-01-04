HOW IT WORKS:

    Encryption:
        Step 1: The sender enters the plaintext that they want to send 
        Step 2: The plaintext gets passed into an encryption algorithm along with the second set of characters (SET2), which is the output of an algorithm that shuffles each character's position from the first set (SET1) around into a second set (SET2)
        Step 3: The encryption algorithm will encrypt the plaintext by replacing each character with the character in SET2 that's at the same index position and then output the result, which is the ciphertext
        Step 4: The sender will then send that ciphertext, while the generated private key needed to decrypt it, which contains the distance of the each character in the ciphertext between its current character within SET2 to it's original index position within SET1, gets shared through a secure channel

    Decryption:
        Step 1: The receiver will pass the received ciphertext and private key through a decryption algorithm
        Step 2: The decryption algorithm will then perform some basic arithmetic using the data found in the private key in order to get the index position of each character from the original plaintext

    Additional information:
        SET1 is static, meaning that it never changes
        SET2 is dynamic, meaning that everytime a subject wants to encrypt a message, it changes regardless of the message

        Product: https://knowcybersecurity.github.io/Encryption-Algorithm/
        Source code: https://github.com/KnowCybersecurity/Encryption-Algorithm