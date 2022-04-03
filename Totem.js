//监听消耗图腾事件
mc.listen("onConsumeTotem",function(player){
	setTimeout(function(){
		let item = player.getOffHand();
		if(item.isNull()){
			// minecraft:totem_of_undying
			let container = player.getInventory();	//获取玩家的背包
			
			//轮询背包
			let items = container.getAllItems();
			for(i=0;i<items.length;i++){
				if(items[i].type == "minecraft:totem_of_undying"){
					//将该格子的物品移动到 副手
					item.set(items[i]);
					items[i].setNull();
					player.refreshItems();
					player.tell(`已成功将第${i}格的不死图腾移动到副手`);
					return;
				}
			}
			
			
		}
	},20)
	return true;
});