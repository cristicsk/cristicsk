import React, { Component } from 'react';
import * as THREE from 'three';
import crateTexture from './../../assets/textures/crate.gif'
import './three.css';

class Three extends Component {
    state = {
        resizePointer: null
    }
  

    componentDidMount() {
        var scene, camera, render, geometry, material, cube;
        var three = document.getElementById('three');
        var initThree = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, three.offsetWidth/three.offsetHeight, 0.1, 1000);
            render = new THREE.WebGLRenderer();
            render.setSize(three.offsetWidth, three.offsetHeight);
            three.appendChild(render.domElement);

            const texture = new THREE.TextureLoader().load(crateTexture);
            geometry = new THREE.BoxGeometry(1, 1, 1);
            material = new THREE.MeshBasicMaterial( {map: texture});
            cube = new THREE.Mesh( geometry, material);
            scene.add(cube);
            camera.position.z = 5;
        }

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;
            render.render( scene, camera);
        }

        
        const onWindowsResize = () => {
                camera.aspect = three.offsetWidth / three.offsetHeight;
                camera.updateProjectionMatrix();
                render.setSize(three.offsetWidth, three.offsetHeight);
            }
        this.setState({resizePointer: onWindowsResize});

        window.addEventListener('resize',onWindowsResize);
        initThree();
        animate();
    }

    componentWillUnmount() {
        window.removeEventListener('resize',this.state.resizePointer);
    }

    render() {


        return (
            <div ref={canvas => (this.canvas = canvas)} className='canvas' id='three'/>
        )

    }
};


export default Three;