class Program{
	static Canvas;
	static Width;
	static Height;
	static Map = [];
	static ChipSize = 10;
	//初期化
	static Init(){
		this.Canvas = document.getElementById("canvas");
		this.Width = parseInt(this.Canvas.getAttribute("width")) / this.ChipSize;
		this.Height = parseInt(this.Canvas.getAttribute("height")) / this.ChipSize;
		this.MapCreate();
		this.Draw();
	}
	//エントリーポイント
	static Main(){
		this.Init();
	}
	//ゲーム画面作り
	static MapCreate(){
		for(let x = 0; x < this.Width; x++){
			this.Map[x] = [];
			for(let y = 0; y < this.Height; y++){
				this.Map[x][y] = 1;
			}
		}
	}
	//描画
	static Draw(){
		let context = this.Canvas.getContext("2d");
		context.fillStyle = "#000000";
		for(let x = 0; x < this.Width; x++){
			for(let y = 0; y < this.Height; y++){
				context.fillRect(x * this.ChipSize, y * this.ChipSize, this.ChipSize, this.ChipSize);
			}
		}
	}
	//画面更新
	static Update(){
		
	}
}

class Player{

}

class Enemy{

}