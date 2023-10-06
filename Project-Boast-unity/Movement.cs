using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    [SerializeField] float mainThroust = 1000f;
    [SerializeField] float rotationThrust = 100f;
    [SerializeField] AudioClip mainEngine;

    [SerializeField] ParticleSystem engineThrustParticle;
    [SerializeField] ParticleSystem rightThrustParticle;
    [SerializeField] ParticleSystem leftThrustParticle;
    Rigidbody rb;
    AudioSource audioSource;


    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        audioSource = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        thrust();
        rotate();
    }

    void thrust()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            rb.AddRelativeForce(Vector3.up * mainThroust * Time.deltaTime);
            if (!audioSource.isPlaying)
            {
                audioSource.PlayOneShot(mainEngine);
                if (!engineThrustParticle.isPlaying)
                {
                    engineThrustParticle.Play();
                }

            }
        }
        else
        {
            audioSource.Stop();
            engineThrustParticle.Stop();
        }
    }
    void rotate()
    {
        if (Input.GetKey(KeyCode.A))
        {
            ApplyRotation(rotationThrust);
            if (!rightThrustParticle.isPlaying)
            {
                rightThrustParticle.Play();
            }
        }
        else if (Input.GetKey(KeyCode.D))
        {
            ApplyRotation(-rotationThrust);
            if (!leftThrustParticle.isPlaying)
            {
                leftThrustParticle.Play();
            }

        }
        else
        {
            leftThrustParticle.Stop();
            rightThrustParticle.Stop();
        }
    }

    void ApplyRotation(float rotateFrame)
    {
        rb.freezeRotation = true;
        transform.Rotate(Vector3.forward * rotateFrame * Time.deltaTime);
        rb.freezeRotation = false;
    }
}
