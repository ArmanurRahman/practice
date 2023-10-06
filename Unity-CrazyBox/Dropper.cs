using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dropper : MonoBehaviour
{

    [SerializeField] float titmeToWait = 5f;
    MeshRenderer mashRenderer;
    Rigidbody rigitbory;
    // Start is called before the first frame update
    void Start()
    {
        mashRenderer = GetComponent<MeshRenderer>();
        rigitbory = GetComponent<Rigidbody>();
        mashRenderer.enabled = false;
        rigitbory.useGravity = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time > titmeToWait)
        {
            mashRenderer.enabled = true;
            rigitbory.useGravity = true;
        }
    }
}
