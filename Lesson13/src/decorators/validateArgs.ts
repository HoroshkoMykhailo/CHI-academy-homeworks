import { HttpError } from "routing-controllers";

function ValidateArgs(validateFn: (args: any) => void) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            try {
                validateFn(args[0]);
            } catch (error: any) {
                if (error instanceof HttpError) {
                    throw error;
                }
                throw new HttpError(400, error.message || "Invalid input");
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

export { ValidateArgs };