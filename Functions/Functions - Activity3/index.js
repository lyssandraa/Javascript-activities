const pinNum = 1234;

function PinNumverification(enteredPin) {
  if (enteredPin !== pinNum) {
    console.log("Incorrect PIN.");
    return false;
  }
  return true;
}

function balanceVerification(balance, withdrawn) {
  if (balance >= withdrawn) {
    return true;
  } else {
    console.log("Insufficient balance.");
    return false;
  }
}

function dispenseMoney(enteredPin, balance, withdrawn) {
  if (
    PinNumverification(enteredPin) &&
    balanceVerification(balance, withdrawn)
  ) {
    console.log(
      `Your transaction has been successful. You have withdrawn ${withdrawn}`
    );
  }
}

dispenseMoney(1234, 10, 10);
