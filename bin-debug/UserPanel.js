var UserPanel = (function (_super) {
    __extends(UserPanel, _super);
    function UserPanel() {
        var _this = this;
        _super.call(this);
        this.width = 480;
        this.height = 600;
        this.background = this.createBitmapByName("UserPanelBackGround_png");
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = 0;
        this.background.width = 480;
        this.background.height = 600;
        this.background.touchEnabled = true;
        this.background.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.equipmentInformationPanel.alpha = 0;
        }, this);
        this.weaponIconPicture = new egret.Bitmap();
        this.weaponIconPicture.width = 50;
        this.weaponIconPicture.height = 50;
        this.addChild(this.weaponIconPicture);
        this.weaponIconPicture.x = this.width * 7 / 9;
        this.weaponIconPicture.y = this.height / 8;
        this.weaponIconPicture.touchEnabled = true;
        this.weaponIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.hero.weaponsEquipment[0].getEquipmentInformations();
            //this.equipmentInformationPanel.showEquipmentInformation(this.hero.weaponsEquipment[0]);
            _this.equipmentInformationPanel.alpha = 1;
        }, this);
        this.helmentIconPicture = new egret.Bitmap();
        this.helmentIconPicture.width = 50;
        this.helmentIconPicture.height = 50;
        this.addChild(this.helmentIconPicture);
        this.helmentIconPicture.x = this.width * 7 / 9;
        this.helmentIconPicture.y = this.weaponIconPicture.y + this.height / 6;
        this.helmentIconPicture.touchEnabled = true;
        this.helmentIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.hero.armorEquipment[0].getDefence();
            _this.hero.armorEquipment[0].getSpeed();
            //this.equipmentInformationPanel.showEquipmentInformation(this.hero.armorEquipment[0]);
            _this.equipmentInformationPanel.alpha = 1;
        }, this);
        this.lightarmorIconPicture = new egret.Bitmap();
        this.lightarmorIconPicture.width = 50;
        this.lightarmorIconPicture.height = 50;
        this.addChild(this.lightarmorIconPicture);
        this.lightarmorIconPicture.x = this.width * 7 / 9;
        this.lightarmorIconPicture.y = this.helmentIconPicture.y + this.height / 7;
        this.lightarmorIconPicture.touchEnabled = true;
        this.lightarmorIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.hero.armorEquipment[1].getDefence();
            _this.hero.armorEquipment[1].getSpeed();
            //this.equipmentInformationPanel.showEquipmentInformation(this.hero.armorEquipment[1]);
            _this.equipmentInformationPanel.alpha = 1;
        }, this);
        this.shoesIconPicture = new egret.Bitmap();
        this.shoesIconPicture.width = 50;
        this.shoesIconPicture.height = 50;
        this.addChild(this.shoesIconPicture);
        this.shoesIconPicture.x = this.width * 7 / 9;
        this.shoesIconPicture.y = this.lightarmorIconPicture.y + this.height / 6;
        this.shoesIconPicture.touchEnabled = true;
        this.shoesIconPicture.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.hero.armorEquipment[2].getDefence();
            _this.hero.armorEquipment[2].getSpeed();
            //this.equipmentInformationPanel.showEquipmentInformation(this.hero.armorEquipment[2]);
            _this.equipmentInformationPanel.alpha = 1;
        }, this);
        this.heroPicture = new egret.Bitmap();
        this.heroPicture.width = 323;
        this.heroPicture.height = 400;
        this.addChild(this.heroPicture);
        this.heroPicture.x = 0;
        this.heroPicture.y = 50;
        this.heroInformationText = "";
        this.heroInformationTextField = new egret.TextField();
        this.heroInformationTextField.width = 400;
        this.heroInformationTextField.height = 100;
        this.addChild(this.heroInformationTextField);
        this.heroInformationTextField.x = (this.width - this.heroInformationTextField.width) / 2;
        this.heroInformationTextField.y = 460;
        this.heroInformationTextField.size = 16;
        this.equipmentInformationPanel = new EquipmentInformationPanel();
        this.addChild(this.equipmentInformationPanel);
        this.equipmentInformationPanel.x = (this.width - this.equipmentInformationPanel.width) / 2;
        this.equipmentInformationPanel.y = (this.height - this.equipmentInformationPanel.height) / 2;
        this.equipmentInformationPanel.alpha = 0;
    }
    var d = __define,c=UserPanel,p=c.prototype;
    /*public showHeroInformation(hero : Hero){
        this.hero = hero;
        this.getHeroInformations(hero);
        this.heroPicture.texture = RES.getRes(hero.heroBitemapID);
        this.weaponIconPicture.texture = RES.getRes(hero.weaponsEquipment[0].equipmentBitmapID);
        this.helmentIconPicture.texture = RES.getRes(hero.armorEquipment[0].equipmentBitmapID);
        this.lightarmorIconPicture.texture = RES.getRes(hero.armorEquipment[1].equipmentBitmapID);
        this.shoesIconPicture.texture = RES.getRes(hero.armorEquipment[2].equipmentBitmapID);
        //this.heroInformationTextField.text = this.heroInformationText;
        //this.heroInformationTextField.textColor = hero.color;
    }*/
    /*public getHeroInformations(hero : Hero){
        this.heroInformationText = "";
        this.heroInformationText = "英雄 : " + hero.heroName + "\n";
        hero.getDefence();
        hero.getAttack();
        hero.getMaxHP();
        hero.getSpeed();
        for(let i = 0; i < hero.properties.length; i++){
            this.heroInformationText = this.heroInformationText + hero.properties[i].name + " : " + hero.properties[i].value.toFixed(0) + "\n";
        }
        this.heroInformationText = this.heroInformationText + "战斗力 : " + hero.getFightPower().toFixed(0);
        this.heroInformationTextField.text = this.heroInformationText;
    }*/
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return UserPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(UserPanel,'UserPanel');
var EquipmentInformationPanel = (function (_super) {
    __extends(EquipmentInformationPanel, _super);
    function EquipmentInformationPanel() {
        _super.call(this);
        this.width = 250;
        this.height = 400;
        this.backGround = new egret.Bitmap();
        this.backGround.texture = RES.getRes("BlackBackground_png");
        this.backGround.width = 250;
        this.backGround.height = 400;
        this.addChild(this.backGround);
        this.backGround.x = 0;
        this.backGround.y = 0;
        this.backGround.alpha = 0.8;
        this.equipmentIconBitmap = new egret.Bitmap();
        this.equipmentIconBitmap.width = 60;
        this.equipmentIconBitmap.height = 60;
        this.addChild(this.equipmentIconBitmap);
        this.equipmentIconBitmap.x = 30;
        this.equipmentIconBitmap.y = 30;
        this.nameField = new egret.TextField();
        this.nameField.width = 200;
        this.nameField.height = 50;
        this.addChild(this.nameField);
        this.nameField.size = 24;
        this.nameField.x = 30;
        this.nameField.y = this.equipmentIconBitmap.y + this.equipmentIconBitmap.height + 50;
        this.propertiesField = new egret.TextField();
        this.propertiesField.width = 200;
        this.propertiesField.height = 300;
        this.addChild(this.propertiesField);
        this.propertiesField.textColor = 0xffffff;
        this.propertiesField.size = 20;
        this.propertiesField.x = 30;
        this.propertiesField.y = this.nameField.y + 55;
    }
    var d = __define,c=EquipmentInformationPanel,p=c.prototype;
    return EquipmentInformationPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(EquipmentInformationPanel,'EquipmentInformationPanel');
//# sourceMappingURL=UserPanel.js.map