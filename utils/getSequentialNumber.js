function* getSequentialNumber() {
  let counter = 0;

  while(true) {
    yield counter++;
  }
}

export const globalCounter = getSequentialNumber();
