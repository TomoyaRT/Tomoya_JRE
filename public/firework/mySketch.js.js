
let particles = []
let particle
let audioInput
let lastFrameCount = 0
let isMousePressed = false
let soundFirework

function createFirework({p, fireworkR, particleR}) {
	soundFirework.play()
	soundFirework.setVolume(random(0.3)*random())

	push()
		colorMode(HSB)
		const baseHue = random(300)
		const particleCount = random(100, 200)
		for (let i = 0; i < particleCount; i++) {
			const hue = (baseHue + random(120)) % 360
			const endHue = (100 + baseHue + random(120)) % 360
			const config = {
				p: p ? p.copy() : createVector(width/2, height/2),
				v: p5.Vector.random2D().mult(random(1, fireworkR ?? 5)),
				a: createVector(0,0.05),
				r: particleR ? random(particleR) : random(40),
				color: color(hue,360,360),
				endColor: color(endHue,360,360),
			}
			let particle = new Particle(config)
			particles.push(particle)
		}
	pop()
}

function preload(){
	soundFirework = loadSound("firework.mp3")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	createFirework({})
	audioInput = new p5.AudioIn()
	audioInput.start();
}

function draw() {
	const audioVolume = audioInput.getLevel()
	const isSpeaking = audioVolume > 0.1
	
	// 每1毫秒蓋上一個黑色遮罩版(帶5透明度) 讓煙火有消失的漸層軌跡
	fill(0,8)
	rect(0,0,width,height)
	
	// 混合模式效果
	push()
		blendMode(SCREEN)
		for (let particle of particles) {
			particle.update()
			particle.draw()
		}
	pop()
	
	// 如果沒有按滑鼠，每100毫秒產生一束煙火
	if (!isMousePressed) {
		if (frameCount % 75 === 0) {
			const config = {
				p: createVector(random(width), random(height)),
			}
			createFirework(config)
		}
	}
	
	// 聲控煙火 (高低音控制顏色)
	if (isSpeaking && (frameCount - lastFrameCount) > 5) {
		lastFrameCount = frameCount
		const config = {
			p: createVector(random(width), random(height)),
			fireworkR: random(1, 10),
			particleR: random(1, 15)
		}
		createFirework(config)
	}
	
	// 汰除掉畫面外 | 尺寸過小的煙火
	particles = particles.filter(particle => particle.p.y < height || particle.r > 0.5)
	
	// 顯示目前煙火數量
	// fill(0)
	// rect(0,0,150,100)
	// fill(255)
	// textSize(50)
	// text(particles.length, 50, 50)
}

function mousePressed() {
	isMousePressed = true
	const config = {
		p: createVector(mouseX, mouseY),
		fireworkR: random(0.2, 15),
		particleR: random(5, 15)
	}
	createFirework(config)
}