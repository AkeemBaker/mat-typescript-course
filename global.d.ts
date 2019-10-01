declare namespace myLib
{
    interface Product
    {
        name: string;
        description: string;
        price: string;
    }

    interface CustomerDetails
    {
        name: string;
        address: string;
        vehicleDetails?:
        {
            make: string;
            model: string;
            year: number;
        }
    }
}