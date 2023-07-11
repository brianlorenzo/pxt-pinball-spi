namespace pinballSPI{
    /*
        Configuración de pines SPI
        MOSI    P15
        MISO    P14
        SCK     P13
    */
    export function config(): void{
        pins.digitalWritePin(DigitalPin.P0, 1);

        //           MOSI P15,        MISO P14,      SCK P13
        pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13);
        //          8 bits, Modo 3
        pins.spiFormat(8, 3);
        
        pins.spiFrequency(1000000);
    }


    /*
        Mando un número natural (entre 0 y 100) por SPI
    */
    //% blockId=sendNumberSPI
    //% block="send number via SPI $x"
    //% x.min=0 x.max=100
    export function sendNumber (x:number): void {
    // Recibe un parámetro x. Devuelve nada, es void
    const msj = x;  
    }

}