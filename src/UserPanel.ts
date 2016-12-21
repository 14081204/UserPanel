class UserPanel extends egret.DisplayObjectContainer{

private background : egret.Bitmap;
private heroPicture : egret.Bitmap;
private weaponIconPicture : egret.Bitmap;
private helmentIconPicture : egret.Bitmap;
private lightarmorIconPicture : egret.Bitmap;
private shoesIconPicture : egret.Bitmap;
private heroInformationTextField : egret.TextField;
private heroInformationText : string;
private hero : Hero;

constructor(){
    super();
    this.width = 480;
    this.height = 800;

    this.background = this.createBitmapByName("Informationbg_png");
    this.addChild(this.background);
    this.background.x = 0;
    this.background.y = 0;
    this.background.width = 480;
    this.background.height = 800;
    this.background.touchEnabled = true;
    this.background.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
    },this)

    //this.weaponIconPicture = new egret.Bitmap();
    this.weaponIconPicture = this.createBitmapByName("Weapon_jpg");
    this.weaponIconPicture.width = 75;
    this.weaponIconPicture.height = 75;
    this.addChild(this.weaponIconPicture);
    this.weaponIconPicture.x = this.width * 1 / 5 - this.weaponIconPicture.width;
    this.weaponIconPicture.y = this.height * 2 / 5;
    this.weaponIconPicture.touchEnabled = true;
    this.weaponIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
        this.hero.weaponsEquipment[0].getEquipmentInformations();
    },this)
        

    this.helmentIconPicture = this.createBitmapByName("Helment_jpg");
    this.helmentIconPicture.width = 75;
    this.helmentIconPicture.height = 75;
    this.addChild(this.helmentIconPicture);
    this.helmentIconPicture.x = this.width * 4 / 5;
    this.helmentIconPicture.y = this.height * 2 / 5;
    this.helmentIconPicture.touchEnabled = true;
    this.helmentIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
        this.hero.armorEquipment[0].getDefence();
        this.hero.armorEquipment[0].getSpeed();
    },this)

    this.lightarmorIconPicture = this.createBitmapByName("LightArmor_jpg");
    this.lightarmorIconPicture.width = 75;
    this.lightarmorIconPicture.height = 75;
    this.addChild(this.lightarmorIconPicture);
    this.lightarmorIconPicture.x = this.width * 4 / 5;
    this.lightarmorIconPicture.y = this.helmentIconPicture.y + this.height / 6;
    this.lightarmorIconPicture.touchEnabled = true;
    this.lightarmorIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
        this.hero.armorEquipment[1].getDefence();
        this.hero.armorEquipment[1].getSpeed();
    },this)

    this.shoesIconPicture = this.createBitmapByName("Shoes_jpg");
    this.shoesIconPicture.width = 75;
    this.shoesIconPicture.height = 75;
    this.addChild(this.shoesIconPicture);
    this.shoesIconPicture.x = this.width * 4 / 5;
    this.shoesIconPicture.y = this.lightarmorIconPicture.y + this.height / 6;
    this.shoesIconPicture.touchEnabled = true;
    this.shoesIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
        this.hero.armorEquipment[2].getDefence();
        this.hero.armorEquipment[2].getSpeed();
    },this)

    this.heroPicture = this.createBitmapByName("02_png");
    this.heroPicture.width = 300;
    this.heroPicture.height = 400;
    this.addChild(this.heroPicture);
    this.heroPicture.x = this.width / 5 ;
    this.heroPicture.y = this.height / 3;

    this.heroInformationText = "";//显示战斗力

    this.heroInformationTextField = new egret.TextField();
    this.heroInformationTextField.width = 400;
    this.heroInformationTextField.height = 100;
    this.addChild(this.heroInformationTextField);
    this.heroInformationTextField.x = (this.width - this.heroInformationTextField.width) / 2;
    this.heroInformationTextField.y = 460;
    this.heroInformationTextField.size = 16;
    }

    public showHeroInformation(hero : Hero){
        this.hero = hero;
        this.getHeroInformations(hero);
    }

    public getHeroInformations(hero : Hero){
        this.heroInformationText = "";
        this.heroInformationText = "英雄 : " + hero.heroName + "\n";
        hero.getDefence();
        hero.getAttack();
        hero.getMaxHp();
        hero.getSpeed();
        for(let i = 0; i < hero.properties.length; i++){
            this.heroInformationText = this.heroInformationText + hero.properties[i].name + " : " + hero.properties[i].value.toFixed(0) + "\n";
        }
        this.heroInformationText = this.heroInformationText + "战斗力 : " + hero.getFightPower().toFixed(0);
        this.heroInformationTextField.text = this.heroInformationText;
    }

    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
}