declare module "*.module.scss" {
    interface  ICLassNames {
        [className: string]: string
    }
    const classNames: ICLassNames;
    export = classNames;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg" {
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}